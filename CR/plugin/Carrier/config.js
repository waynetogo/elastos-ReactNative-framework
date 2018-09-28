export default {
  bootstraps : [
    { ipv4: "13.58.208.50",  port: "33445", publicKey: "89vny8MrKdDKs7Uta9RdVmspPjnRMdwMmaiEW27pZ7gh" },
    { ipv4: "18.216.102.47", port: "33445", publicKey: "G5z8MqiNDFTadFUPfMdYsYtkUDbX5mNCMVHMZtsCnFeb" },
    { ipv4: "18.216.6.197",  port: "33445", publicKey: "H8sqhRrQuJZ6iLtP2wanxt4LzdNrN2NNFnpPdq1uJ9n2" },
    { ipv4: "52.83.171.135", port: "33445", publicKey: "5tuHgK1Q4CYf4K5PutsEPK5E3Z7cbtEBdx7LwmdzqXHL" },
    { ipv4: "52.83.191.228", port: "33445", publicKey: "3khtxZo89SBScAMaHhTvD68pPHiKxgZT6hTCSZZVgNEm" }
  ],

  CARRIER_CB_NAMES : [
    // "onIdle",
    "onConnection",
    "onReady",
    "onSelfInfoChanged",
    "onFriends",
    "onFriendConnection",
    "onFriendInfoChanged",
    "onFriendPresence",
    "onFriendRequest",
    "onFriendAdded",
    "onFriendRemoved",
    "onFriendMessage",
    "onFriendInviteRequest",
    "onSessionRequest",
  ],
  CONNECTION_STATUS : {
    '0' : 'connected',
    '1' : 'disconnected'
  },
  PRESENCE_STATUS : {
    '0' : 'online',
    '1' : 'away',
    '2' : 'busy'
  }
  
};