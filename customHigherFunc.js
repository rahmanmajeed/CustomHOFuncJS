let notifications = [
    {message: 'Lorem', read: true},
    {message: 'Ipsum', read: true},
    {message: 'Dolor', read: true},
    {message: 'Sit', read: false},
    {message: 'Amet', read: true}
    ];
    
    let allRead = true;
    
    Array.prototype.myHigher = function(arr) {
          return arr.every((element,index,array) => element.read == true)
    }
    
    
     allRead =notifications.myHigher(notifications)
    
    console.log(allRead) // false