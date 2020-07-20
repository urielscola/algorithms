




const pokerChips = (pot) => {

  if (pot < 0) throw new Error('Pot amount cannot be negative');

  let rest = Math.floor(pot); // to handle decimals
  let chips = 0;
  const chipTypes = [100, 50, 25, 10, 5, 1];

  for (let i = 0; i < chipTypes.length; i++) {
    const chip = chipTypes[i];
    let amount = Math.floor(rest / chip);
    rest -= amount * chip;
    chips += amount;
  }

  return chips;
};

export default pokerChips;