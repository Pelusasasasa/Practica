import type { Config } from "@react-router/dev/config";

const generateRandomName = () => {
  const names = [
    "Liam","Noah","Oliver","Elijah","James","William","Benjamin","Lucas","Henry","Alexander",
    "Mason","Michael","Ethan","Daniel","Jacob","Logan","Jackson","Levi","Sebastian","Mateo",
    "Jack","Owen","Theodore","Aiden","Samuel","Joseph","John","David","Wyatt","Matthew",
    "Luke","Asher","Carter","Julian","Grayson","Leo","Jayden","Gabriel","Isaac","Lincoln",
    "Anthony","Hudson","Dylan","Ezra","Thomas","Charles","Christopher","Jaxon","Maverick","Josiah",
    "Isaiah","Andrew","Elias","Joshua","Nathan","Caleb","Ryan","Adrian","Miles","Eli",
    "Nolan","Christian","Aaron","Cameron","Ezekiel","Colton","Luca","Landon","Hunter","Jonathan",
    "Santiago","Axel","Easton","Cooper","Jeremiah","Angel","Roman","Connor","Jameson","Robert",
    "Greyson","Jordan","Ian","Carson","Jaxson","Leonardo","Nicholas","Dominic","Austin","Everett",
    "Brooks","Xavier","Kai","Jose","Parker","Adam","Jace","Wesley","Kayden","Silas",
    "Bentley","Weston","Jason","Miles","Micah","Zachary","Nathaniel","Declan","Theo","Alex",
    "Emmett","Sawyer","Kingston","Brayden","Kayden","Camden","Jordan","Cole","Tyler","Aaron",
    "Ryder","Diego","Beau","Walker","Aidan","Max","Juan","Vincent","Legend","Maddox",
    "George","Harrison","August","Bryson","Amir"
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const routesWithArgs = Array.from({length: 151}, (_, i) => {
  const id = (i + 1).toString();
  const name = generateRandomName();
  const age = Math.floor(Math.random() * 70) + 8; // ages 8-77
  return `auth/testing-args/${id}/${name}/${age}`
});


export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  async prerender(){
    return [
      '/auth/login',
      '/auth/register',
      '/auth/testing',

      '/products/manazana',
      '/products/pera',
      '/products/banana',
      '/products/melon',

      ...routesWithArgs
    ]
  }
} satisfies Config;
