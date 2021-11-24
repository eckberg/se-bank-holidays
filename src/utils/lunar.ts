/**
 * SOURCE: https://github.com/ryanseys/lune
 */

/**
 * This library calculates the current phase of the moon
 * as well as finds the dates of the recent moon phases.
 *
 * Some functionality is ported from python version found here:
 * https://bazaar.launchpad.net/~keturn/py-moon-phase/trunk/annotate/head:/moon.py
 *
 * Some functionality is taken from Astronomical Algorithms, 2nd ed.
 *
 * Some functionality is taken from the US Naval Observatory, described here:
 * https://aa.usno.navy.mil/faq/docs/SunApprox.php
 *
 * Author: Ryan Seys (https://github.com/ryanseys)
 * Author: Jay LaPorte (https://github.com/ironwallaby)
 */

// Phases of the moon & precision
const NEW = 0;
const FIRST = 1;
const FULL = 2;
const LAST = 3;
const PHASE_MASK = 3;

// Astronomical Constants
// Semi-major axis of Earth's orbit, in kilometers
const SUN_SMAXIS = 1.49585e8;

// SUN_SMAXIS premultiplied by the angular size of the Sun from the Earth
const SUN_ANGULAR_SIZE_SMAXIS = SUN_SMAXIS * 0.533128;

// Semi-major axis of the Moon's orbit, in kilometers
const MOON_SMAXIS = 384401.0;

// MOON_SMAXIS premultiplied by the angular size of the Moon from the Earth
const MOON_ANGULAR_SIZE_SMAXIS = MOON_SMAXIS * 0.5181;

// Synodic month (new Moon to new Moon), in days
const SYNODIC_MONTH = 29.53058868;

/**
 * Convert degrees to radians
 * @param  {Number} d Angle in degrees
 * @return {Number}   Angle in radians
 */
function torad(d: number) {
  return (Math.PI / 180.0) * d;
}

/**
 * Convert radians to degrees
 * @param  {Number} r Angle in radians
 * @return {Number}   Angle in degrees
 */
function dsin(d: number) {
  return Math.sin(torad(d));
}

function dcos(d: number) {
  return Math.cos(torad(d));
}

/**
 * Convert astronomical units to kilometers
 * @param  {Number} au Distance in astronomical units
 * @return {Number}    Distance in kilometers
 */
function tokm(au: number) {
  return 149597870.7 * au;
}

function julianToDate(julian: number) {
  return new Date((julian - 2440587.5) * 86400000);
}

/**
 * Given a K value used to determine the mean phase of the new moon, and a
 * phase selector (0, 1, 2, 3), obtain the true, corrected phase time.
 * @param  {[type]} k      [description]
 * @param  {[type]} tphase [description]
 * @return {[type]}        [description]
 */
function truephase(k: number, tphase: number) {
  // restrict tphase to (0, 1, 2, 3)
  tphase = tphase & PHASE_MASK;

  // add phase to new moon time
  k = k + 0.25 * tphase;

  // Time in Julian centuries from 1900 January 0.5
  const t = (1.0 / 1236.85) * k;

  // Mean time of phase
  let pt =
    2415020.75933 +
    SYNODIC_MONTH * k +
    (0.0001178 - 0.000000155 * t) * t * t +
    0.00033 * dsin(166.56 + (132.87 - 0.009173 * t) * t);

  // Sun's mean anomaly
  const m = 359.2242 + 29.10535608 * k - (0.0000333 - 0.00000347 * t) * t * t;

  // Moon's mean anomaly
  const mprime =
    306.0253 + 385.81691806 * k + (0.0107306 + 0.00001236 * t) * t * t;

  // Moon's argument of latitude
  const f = 21.2964 + 390.67050646 * k - (0.0016528 - 0.00000239 * t) * t * t;

  // use different correction equations depending on the phase being sought
  switch (tphase) {
    // new and full moon use one correction
    case NEW:
    case FULL:
      pt +=
        (0.1734 - 0.000393 * t) * dsin(m) +
        0.0021 * dsin(2 * m) -
        0.4068 * dsin(mprime) +
        0.0161 * dsin(2 * mprime) -
        0.0004 * dsin(3 * mprime) +
        0.0104 * dsin(2 * f) -
        0.0051 * dsin(m + mprime) -
        0.0074 * dsin(m - mprime) +
        0.0004 * dsin(2 * f + m) -
        0.0004 * dsin(2 * f - m) -
        0.0006 * dsin(2 * f + mprime) +
        0.001 * dsin(2 * f - mprime) +
        0.0005 * dsin(m + 2 * mprime);
      break;

    // first and last quarter moon use a different correction
    case FIRST:
    case LAST:
      pt +=
        (0.1721 - 0.0004 * t) * dsin(m) +
        0.0021 * dsin(2 * m) -
        0.628 * dsin(mprime) +
        0.0089 * dsin(2 * mprime) -
        0.0004 * dsin(3 * mprime) +
        0.0079 * dsin(2 * f) -
        0.0119 * dsin(m + mprime) -
        0.0047 * dsin(m - mprime) +
        0.0003 * dsin(2 * f + m) -
        0.0004 * dsin(2 * f - m) -
        0.0006 * dsin(2 * f + mprime) +
        0.0021 * dsin(2 * f - mprime) +
        0.0003 * dsin(m + 2 * mprime) +
        0.0004 * dsin(m - 2 * mprime) -
        0.0003 * dsin(2 * m + mprime);

      // the sign of the last term depends on whether we're looking for a first
      // or last quarter moon!
      const sign = tphase < FULL ? +1 : -1;
      pt += sign * (0.0028 - 0.0004 * dcos(m) + 0.0003 * dcos(mprime));

      break;
  }

  return julianToDate(pt);
}

export function phaseRange(start: Date, end: Date, phase: number) {
  if (+end - +start < 0) {
    let temp = end;
    end = start;
    start = temp;
  }

  const startTime = start.getTime();
  const endTime = end.getTime();

  let t = startTime - 45 * 86400000;

  let k;
  {
    const d = new Date(t);
    k = Math.floor(
      12.3685 * (d.getFullYear() + (1.0 / 12.0) * d.getMonth() - 1900)
    );
  }

  let date = truephase(k, phase);
  // skip every phase before starting date
  while (date.getTime() < startTime) {
    k++;
    date = truephase(k, phase);
  }
  // add every phase before (or on!) ending date to a list, and return it
  const list = [];
  while (date.getTime() <= endTime) {
    list.push(date);
    k++;
    date = truephase(k, phase);
  }
  return list;
}
