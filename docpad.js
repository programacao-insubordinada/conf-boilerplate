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

    callToAction: {
        text: "Register now!",
        link: "http://eventick.com.br"
    },

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
        description: "Programa em fase de definicão"
      },
      {
        name: "Domingo",
        time: "10h00",
        description: "Programa em fase de definicão"
      },
      {
        name: "Linus Torvalds",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
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