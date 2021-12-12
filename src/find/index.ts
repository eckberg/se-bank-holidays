import { addDays, subDays } from ".."

const availableModifiers = [
  /^sub_days:([0-9]+)$/,
  /^add_days:([0-9]+)$/,
  /^on_or_after$/,
  /^on_or_before$/,
  /^after$/,
  /^before$/
]

export default function find(referenceDate: Date = new Date(), modifiers: string = 'on_or_after') {
  const mods = modifiers.split(',')
    // Split modifications into array
    .map(m => m.trim())

  // Check that all modifications are allowed
  for (const mod of mods) {
    let allowed = false

    for (const amod of availableModifiers) {
      if (amod.test(mod)) {
        allowed = true
        continue
      }
    }

    if (!allowed) {
      throw new Error(`Modification "${mod}" is not supported.`)
    }
  }

  let date = new Date(+referenceDate)

  // Apply modifications
  for (const mod of mods) {
    const modName = mod.split(':')[0]
    const modOption = mod.split(':')[1] || null

    switch(modName) {
      case 'sub_days': date = subDays(date, +(modOption || 0), false); break;
      case 'add_days': date = addDays(date, +(modOption || 0), false); break;
      case 'on_or_before': date = subDays(date, 0, true); break;
      case 'on_or_after': date = addDays(date, 0, true); break;
      case 'before': date = subDays(date, 1, true); break;
      case 'after': date = addDays(date, 1, true); break;
    }
  }

  return date
}
