module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.8)',
      },
      backgroundImage: theme => ({
        'wind-predict': "url('https://cdn.pixabay.com/photo/2013/02/18/18/34/travel-82917_1280.jpg')",
        'sql-inject': "url('https://cdn.pixabay.com/photo/2018/06/19/10/01/internet-3484137_1280.jpg')",
        'online-exam': "url('https://cdn.pixabay.com/photo/2017/03/12/17/54/quiz-2137664_1280.jpg')",
        'online-shop': "url('https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png')",
      })
    },
  },
  variants: {},
  plugins: [],
}
