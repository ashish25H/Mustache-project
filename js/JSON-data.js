const users = [
    {
        name : 'Alice',
        occupation : 'Software Developer',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocI51Zm4Trk_dBVn317rFhgrQ-i9U4Di9zwaQrQnTkoS_KOqz',
        isActive : true,
    },
    {
        name : 'Benjamin',
        occupation : 'Graphic Designer',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUoW6j5yjh4M1iupFolNPyYXqrVM3Xubl6LD9H8H5liNfnjdCN',
        isActive : false,
    },
    {
        name : 'Chloe',
        occupation : 'Veterinarian',
        image : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2KHLdurYQf2KfXUFZaEFNshsOj9efpKG06m8n3ZiPR0SeHlcy',
        isActive : true,
    },
    {
        name : 'Daniel',
        occupation : 'Musician',
        image : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfgUO00Zk-aJDeHETgjIZMJlrjB8Gm96t_TynpOkLAorNPKBPe',
        isActive : false,
    },
    {
        name : 'Emma',
        occupation : 'Chef',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkZU5BYGHbdcftrS41Rs0X2MFh5YNB3FgQcDKgc6ZIpsIOTi_M',
        isActive : true,
    }
]

const friends = [
    {
        name : 'Tony',
        occupation : 'Software Developer',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocI51Zm4Trk_dBVn317rFhgrQ-i9U4Di9zwaQrQnTkoS_KOqz',
        isActive : true,
    },
    {
        name : 'Thor',
        occupation : 'Graphic Designer',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocI51Zm4Trk_dBVn317rFhgrQ-i9U4Di9zwaQrQnTkoS_KOqz',
        isActive : false,
    },
    {
        name : 'Chloe',
        occupation : 'Veterinarian',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocI51Zm4Trk_dBVn317rFhgrQ-i9U4Di9zwaQrQnTkoS_KOqz',
        isActive : true,
    },
    {
        name : 'Daniel',
        occupation : 'Musician',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocI51Zm4Trk_dBVn317rFhgrQ-i9U4Di9zwaQrQnTkoS_KOqz',
        isActive : false,
    },
    {
        name : 'Mr.Bean',
        occupation : 'Chef',
        image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRocI51Zm4Trk_dBVn317rFhgrQ-i9U4Di9zwaQrQnTkoS_KOqz',
        isActive : true,
    }
]

const currentUser = {
    name : 'Guest',
    email : 'guest@gmail.com',
    company : 'newput',
    age : 20,
    occupation : 'Software Engineer',
    DOB : '20/08/1998',
    gender : 'Male',
    password : 'guest25#G',
    maritalStatus : 'Unmarried',
    location : 'India',
    skills : 'JavaScript',
    jobs : 1,
}

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('currentUser', JSON.stringify(currentUser));
localStorage.setItem('friends', JSON.stringify(friends));