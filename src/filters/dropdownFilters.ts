export const dropdownFilters =
{
  label: 'Make',
  isMain: true,
  options: [
    {
      id: "all",
      text: "All",
    },
    {
      id: "toyota",
      text: "Toyota",
      type: 'make',
      models: {
        label: 'Model',
        options: [
          {
            id: 'all',
            text: 'All'
          },
          {
            id: 'corolla',
            text: 'Corolla'
          },
          {
            id: 'cruiser',
            text: 'Cruiser'
          },
          {
            id: 'prado',
            text: 'Prado'
          },
          {
            id: 'highlander',
            text: 'Highlander'
          },
          {
            id: 'hiace',
            text: 'Hiace'
          },
          {
            id: 'tundra',
            text: 'Tundra'
          },
          {
            id: 'hilux',
            text: 'Hilux'
          }
        ]
      }
    },
    {
      id: "bmw",
      text: "BMW",
      models: {
        label: 'Model',
        options: [
          {
            id: 'all',
            text: 'All'
          },
          {
            id: '1-series',
            text: '1 Series'
          },
          {
            id: '4-series',
            text: '4 Series'
          },
          {
            id: 'x3',
            text: 'X3'
          },
          {
            id: 'x4',
            text: 'X4'
          },
          {
            id: 'x5',
            text: 'X5'
          }
        ]
      }
    },
    {
      id: "mercedes",
      text: "Mercedes-Benz",
      models: {
        label: 'Model',
        options: [
          {
            id: 'all',
            text: 'All'
          },
          {
            id: 'a200',
            text: 'A 200'
          },
          {
            id: 'amg',
            text: 'AMG'
          }
        ]
      }
    },
  ]
}