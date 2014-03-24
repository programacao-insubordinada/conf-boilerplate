module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "Programação Insubordinada",
      date: "5 e 6 de Abril",
      venue: "ThoughtWorks - Edifício Empresarial Isaac Newton, 12 andar",
      address: "Av. Governador Agamenon Magalhães, 4779",
      city: "Recife",
      state: "Pernambuco, Brazil"
    },

    socialMedia: {
      twitter: "ProgInsub"
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
        type: "day",
        name: "Sábado"
      },
      {
        type: "other",
        time: "9:30",
        name: "Abertura"
      },
      {
        type: "other",
        time: "10:00",
        name: "Definição dos problemas de justiçia social"
      },
      {
        type: "other",
        time: "11:00",
        name: "Design thinking: prototipação e validação das soluçoes"
      },
      {
        type: "break",
        time: "12:30",
        name: "Almoço"
      },
      {
        type: "other",
        time: "13:30",
        name: "Lean&Agile game"
      },
      {
        type: "other",
        time: "15:00",
        name: "Introduçao a Lean Startup e Entrega Continua"
      },
      {
        type: "other",
        time: "15:30",
        name: "Setup e inicio desenvolvimento"
      },
      {
        type: "other",
        time: "16:30",
        name: "Workshop sobre automaçao de testes"
      },
      {
        type: "other",
        time: "17:45",
        name: "Feedback e retrospectiva"
      },
      {
        type: "day",
        name: "Domingo"
      },
      {
        type: "other",
        time: "9:30",
        name: "Workshop de TDD & Refactoração"
      },
      {
        type: "other",
        time: "11:30",
        name: "Continuação desenvolvimento"
      },
      {
        type: "break",
        time: "12:30",
        name: "Almoço"
      },
      {
        type: "other",
        time: "13:30",
        name: "Aplificar o impacto com compartilhamento aberto e rede sociais"
      },
      {
        type: "other",
        time: "14:00",
        name: "Continuação desenvolvimento"
      },
      {
        type: "other",
        time: "17:00",
        name: "Presentaçao dos projectos"
      },
      {
        type: "other",
        time: "17:30",
        name: "Feedback e retrospectiva"
      },
      {
        type: "presentation",
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
      {
        name: "ThoughtWorks",
        logo: "themes/yellow-swan/img/partners/thoughtworks.png",
        url: "http://www.thoughtworks.com"
      }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};