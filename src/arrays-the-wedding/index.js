const sameInviteeLists = (inviteeListOne, inviteeListTwo) => {
  if (inviteeListOne.length !== inviteeListTwo.length) return false;
  if (inviteeListOne.length === 0 || inviteeListTwo.length === 0) return false;

  const inviteeHashMap = {};

  for (let invitee of inviteeListOne) {
    if (!inviteeHashMap[invitee]) { 
      inviteeHashMap[invitee] = 1;
    } else {
      inviteeHashMap[invitee]++
    }
  }

  for (let i = 0; i < inviteeListTwo.length; i++) {
    if (inviteeHashMap[inviteeListTwo[i]]) {
      inviteeHashMap[inviteeListTwo[i]]--;
      if (inviteeHashMap[inviteeListTwo[i]] === 0) {
        delete inviteeHashMap[inviteeListTwo[i]];
      }
    } else {
      break;
    }
  }

  return Object.keys(inviteeHashMap).length === 0;
};

export default sameInviteeLists;