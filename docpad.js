module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "Programacão Insubordinada",
      description: "",
      date: "5-6 Abril",
      venue: "Venue em definicão",
      address: "Recife",
      city: "Recife",
      state: "Pernambuco, Brazil"
    },

    // callToAction: {
    //     text: "Register now!",
    //     link: "http://eventick.com.br"
    // },

    site: {
      theme: "yellow-swan",
      url: "http://programacao-insubordinada.github.io/",
    },

    sections: [
      'about',
      'location',
      'schedule',
      'speakers',
      // 'sponsors',
      'partners'
      // 'contact'
    ],


    labels: {
      about: "About",
      location: "Location",
      schedule: "Schedule",
      speakers: "Trainers",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    schedule: [
      {
        name: "Sabado",
        time: "10h00",
        description: "Programa em fase de definição"
      },
      {
        name: "Domingo",
        time: "10h00",
        description: "Programa em fase de definição"
      },
      {
        name: "Programacão Insubordinada",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: 'Entre para fazer parte do grupo de voluntarios no google groups!',
        link: {
          href: "https://groups.google.com/forum/#!forum/programacao-insubordinada",
          text: "@ProgInsub"
        },
        presentation: {
          title: "Você quer ajudar na criacão desse evento?",
          description:"" 
         }
      }
    ],

    partners: [
      // {
      //   name: "BrazilJS",
      //   logo: "themes/yellow-swan/img/partner.png",
      //   url: "http://braziljs.org"
      // }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};