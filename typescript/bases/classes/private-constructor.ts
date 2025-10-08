(() => {

    class Apocalipsis{
        static intance:Apocalipsis;

        private constructor(public name: string){

        };

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.intance){
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el uncio');
            };

            return Apocalipsis.intance;
        }
    };

    const apocalipsis1 = Apocalipsis.callApocalipsis();

    console.log(apocalipsis1)

})()