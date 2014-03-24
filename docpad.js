module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "Programação Insubordinada",
      date: "5-6 Abril",
      venue: "Escritorio da ThoughtWorks, 12 andar",
      address: "Av. Governador Agamenon Magalhães, 4779",
      city: "Recife",
      state: "Pernambuco, Brazil"
    },

    callToAction: {
        text: "Inscreva-se!",
        link: "https://programacaoinsubordinada.wufoo.com/forms/z1jyofql1l96g7m/"
    },

    site: {
      theme: "yellow-swan",
      url: "http://programacao-insubordinada.github.io/",
    },

    sections: [
      'about',
      'schedule',
      'location',
      'speakers',
      // 'sponsors',
      'partners'
      // 'contact'
    ],


    labels: {
      about: "Sobre",
      location: "Localização",
      schedule: "Agenda",
      speakers: "Palestrantes",
      sponsors: "Sponsors",
      partners: "Parceiros",
      contact: "Contact"
    },

    schedule: [
      {
        name: "Sábado",
        time: "10h00 - 18:00",
        description: "Programa em fase de definição"
      },
      {
        name: "Domingo",
        time: "10h00 - 18:00",
        description: "Programa em fase de definição"
      },
      {
        name: "Programacão Insubordinada",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: 'Entre para fazer parte do grupo de voluntários no google groups!',
        link: {
          href: "https://groups.google.com/forum/#!forum/programacao-insubordinada",
          text: "@ProgInsub"
        },
        presentation: {
          title: "Você quer ajudar na criação desse evento?",
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