(() => {

    class Avenger {
        
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }


        constructor(private name: string, public team: string, public realName?: string){};


        bio(): string{
            return `${this.name} (${this.name})`
        }

    }


    const antman: Avenger = new Avenger('AntMan', 'Captain');
    console.log(antman.bio())

})();