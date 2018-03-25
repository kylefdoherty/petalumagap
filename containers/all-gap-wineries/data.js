const wineries = [
  {
    name: 'Adobe Road Winery',
    img: {
      url: '/static/images/wineries/adobe_road_winery.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://www.adoberoadwines.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Azari',
    img: {
      url: '/static/images/wineries/azari_winery.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://www.azarivineyards.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Kastania Vineyards',
    img: {
      url: '/static/images/wineries/kastania.jpg',
      altText: 'Kstania Vineyards',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Cabernet Franc', 'Cabernet Savingnon'],
    website: 'http://www.kastaniavineyards.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Black Kite Cellars',
    img: {
      url: '/static/images/wineries/black_kite.jpg',
      altText: 'Kite Cellars',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://blackkitecellars.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Cline Cellars',
    img: {
      url: '/static/images/wineries/cline_cellars.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://clinecellars.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Clouds Rest',
    img: {
      url: '/static/images/wineries/cloudrest.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://www.cloudsrest.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'DeLouch Vineyards',
    img: {
      url: '/static/images/wineries/deloach-vineyards.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://deloachvineyards.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Enriquez Wines',
    img: {
      url: '/static/images/wineries/enriquez_wines.jpeg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://enriquezwines.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Fogline Vineyards',
    img: {
      url: '/static/images/wineries/fogline.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://foglinevineyards.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Karah Estate Vineyard',
    img: {
      url: '/static/images/wineries/karah_estate_vineyard.jpeg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://www.karahestatevineyard.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Macphail Wines',
    img: {
      url: '/static/images/wineries/macphail_wines.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://www.macphailwine.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'McEvoy Ranch',
    img: {
      url: '/static/images/wineries/mcevoy_ranch.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://www.mcevoyranch.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Keller Estate',
    img: {
      url: '/static/images/wineries/keller_estate.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://www.kellerestate.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Pax',
    img: {
      url: '/static/images/wineries/pax_winery.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://paxwine.com/about',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Pellet Estate',
    img: {
      url: '/static/images/wineries/pellet_estate.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://www.pelletestate.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Ramey Wine Cellars',
    img: {
      url: '/static/images/wineries/ramey_wine.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://www.rameywine.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Rodney Strong',
    img: {
      url: '/static/images/wineries/rodney-strong-vineyards.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://www.rodneystrong.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Sojourn Cellars',
    img: {
      url: '/static/images/wineries/sojourn_cellars.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://www.sojourncellars.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Sonoma Portworks',
    img: {
      url: '/static/images/wineries/sonoma_port_works.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://portworks.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Three Sticks',
    img: {
      url: '/static/images/wineries/threesticks.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://www.threestickswines.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Trombetta Family Wines',
    img: {
      url: '/static/images/wineries/trombetta_wines.jpg',
      altText: 'Placeholder Alt Text',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'https://www.trombettawines.com/',
    type: 'Vineyard & Winery',
  },
]

export {
  wineries,
}
