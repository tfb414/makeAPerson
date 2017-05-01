describe('makeAPerons', function(){
    var bob = new Person('Bob Ross');
    it('getFullName should return the full name of the person created', function(){
        expect(bob.getFullName()).toEqual("Bob Ross");
    });
    it('getFirstName should return the firstName name of the person created', function(){
        expect(bob.getFirstName()).toEqual("Bob");
    });
    it('getLastName should return the last name of the person created', function(){
        expect(bob.getLastName()).toEqual("Ross");
    });
    it('setFullName should change the fullName of the person created to the parameter', function(){
        expect(bob.setFullName("Tim Brady")).toEqual("Tim Brady");
    });
    it('setFirstName should return the full name with the first name changed to the parameter', function(){
        expect(bob.setFirstName("John")).toEqual("John Brady");
    });
    it('setLastName should return the full name with the last name changed to the parameter', function(){
        expect(bob.setLastName("Hancock")).toEqual("John Hancock");
    });

});

