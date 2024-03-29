module.exports.config = {
  mainnet: {
    dataSources: [
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0x4e521FF388c83b4c945a33984ba42Efb73Cc04e6",
        startBlock: 12872022,
      },
      {
        name: "molochToken",
        template: "molochToken-ds.yaml",
        address: "0x94b68149aA9603eeF3fD31A63f6d52AdB4f978D9",
        startBlock: 14745984,
      },
    ],
    templates: [],
  },
  "arbitrum-one": {
    dataSources: [
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0x4e521FF388c83b4c945a33984ba42Efb73Cc04e6",
        startBlock: 249938,
      },
      {
        name: "molochToken",
        template: "molochToken-ds.yaml",
        address: "0x691086c17418589688f0d3031cfc8d9400df8817",
        startBlock: 11639843,
      },
    ],
    templates: [],
  },
  "optimism": {
    dataSources: [
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0x5D1ADccB9092eFc65E094Dd8972Bc0d9224b3C41",
        startBlock: 4865606,
      },
      {
        name: "molochToken",
        template: "molochToken-ds.yaml",
        address: "0xdb0f2d9ef30ffae97474d6db8c1f0e999934737d",
        startBlock: 7527385,
      },
    ],
    templates: [],
  },
  celo: {
    dataSources: [
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0x07269699bc441FC97d12d5478Cb09522EF32f76A",
        startBlock: 8691309,
      },
    ],
    templates: [],
  },
  xdai: {
    dataSources: [
      {
        name: "transmutation",
        template: "transmutation-ds.yaml",
        address: "0x2BE7130DF2Ba6822464900cBD818BcDB8cf73d09",
        startBlock: 11814810,
      },
      {
        name: "transmutationV2",
        template: "transmutationV2-ds.yaml",
        address: "0x7F94ec015665743fE84A7f59297eD86A0470e069",
        startBlock: 14846276,
      },
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0x8464135c8F25Da09e49BC8782676a84730C318bC",
        startBlock: 15518416,
      },
      {
        name: "molochToken",
        template: "molochToken-ds.yaml",
        address: "0xF89e2f69FB1351D37b9F82e77bbF10A02cdC5042",
        startBlock: 21604012,
      },
    ],
    templates: [
      {
        name: "transmutation",
        template: "transmutation-template.yaml",
      },
    ],
  },
  goerli: {
    dataSources: [
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0x5D1ADccB9092eFc65E094Dd8972Bc0d9224b3C41",
        startBlock: 7102776,
      },
    ],
    templates: [],
  },
  matic: {
    dataSources: [
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0xbf9e327d465A4A160fA7805282Fb8C7aB892770a",
        startBlock: 13846231,
      },
      {
        name: "molochToken",
        template: "molochToken-ds.yaml",
        address: "0x651657ffc274f492c8006e847350e12ed1c8491a",
        startBlock: 28126331,
      },
    ],
    templates: [],
  },
};
