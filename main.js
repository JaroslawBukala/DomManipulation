//I have used information from the following website https://stackoverflow.com/questions/71303029/trying-to-pass-input-value-as-new-object-into-an-array

/*This example shows how we use the built-in methods getElementbyId, createElement and appendChild for manipulating
our HTML page. */

/*See the querySelector method below. 
    The querySelector method finds the first Element within the document that matches the specified selector, or group of selectors.
    For more info about this methos see here:https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    The code below, therefore, finds an ordered list <ol> element.
    We store a reference to the <ol> element that is found in a variable called htmList. */
    //access theul element
    let htmlList = document.querySelector('#itemList');
        /* We want to add listItems <li> to the ordered list element that we found above. To do this,
        we first have to create a list item. Notice how an element can be created below using the createElement method. 
        Here we create 4 <li> elements. */
        //create the array
        let shoppingList = ['chicken', 'apples', 'pears', 'bananas']
        //create a variable for a list item display element
        let listItem = ''
        //create a variable for user input
        let input = ''
     
    //create a function that will display the added li items
    function display() {
        for (let i = 0; i < shoppingList.length; i++) {
                listItem = document.createElement('li')
                if(i <= 1) {
                    listItem.className = "color strike"
                }
                listItem.innerHTML = shoppingList[i]
                listItem.addClass = "color"
                htmlList.appendChild(listItem)
        }
    }

    //call display function
    display()

       //
       function updateList(){
        input = document.querySelector('#input').value

        if(input.length > 0){
            listItem = document.createElement('li')
            shoppingList.push(input)
            
            listItem.innerHTML = input
            htmlList.appendChild(listItem)
        }
}