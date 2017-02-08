interface Person {
  name: string,
  title: string,
  description: string,
  image: string,
  links: {
    linkedin: string,
    github: string,
    twitter: string,
  },
}

// tslint:disable
export const persons: Person[] = [{
  name: 'Johannes Schickling',
  title: 'Co-founder & CEO',
  description: 'Obsessed with cutting edge technologies. Co-founded and sold VR company Optonaut. Serial hackathon winner and tech mentor.',
  image: require('../../../assets/graphics/team/johannes.png'),
  links: {
    linkedin: 'https://www.linkedin.com/in/schickling',
    github: 'https://github.com/schickling',
    twitter: 'https://twitter.com/_schickling',
  },
}, {
  name: 'Søren Bramer Schmidt',
  title: 'Co-founder & CTO',
  description: 'Entrepreneur and employee #1 at Trustpilot.com. Studied computer science in Denmark. Loves tinkering with new technology.',
  image: require('../../../assets/graphics/team/soren.png'),
  links: {
    linkedin: 'https://www.linkedin.com/in/sorenbs',
    github: 'https://github.com/sorenbs',
    twitter: 'https://twitter.com/sorenbs',
  },
}, {
  name: 'Tim Suchanek',
  title: 'Developer',
  description: 'Previously built Wizart, an AI painting app. Studied computer science at KIT. Excellent hobby chef.',
  image: require('../../../assets/graphics/team/tim.png'),
  links: {
    linkedin: 'https://www.linkedin.com/in/tim-suchanek-08219346/',
    github: 'https://github.com/timsuchanek',
    twitter: 'https://twitter.com/timsuchanek',
  },
}, {
  name: 'Nilan Marktanner',
  title: 'Customer success',
  description: 'Studies math + computer science in Germany. Enjoys giving classes in Java and Android. Passionate about eSports and exploring new places.',
  image: require('../../../assets/graphics/team/nilan.png'),
  links: {
    linkedin: 'https://www.linkedin.com/in/nilanm',
    github: 'https://github.com/marktani',
    twitter: 'https://twitter.com/_marktani',
  },
}]
