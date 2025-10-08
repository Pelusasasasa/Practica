(() => {
    const fullName= (firstName: string, lastName? :string, upper: boolean = false): string => {

        if(upper){
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }

        return `${firstName} ${lastName || ''}`;
    };

    const name  = fullName('Tony');

    console.log({name})
});