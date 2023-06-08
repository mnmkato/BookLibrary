myLibrary=[]

function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

function AddBook(title,author,pages,read){
    const book1=new Book(title,author,pages,read);
    myLibrary.push(book1);   
}


AddBook("A court of silver flames","Sarah J Maas",1451,false)
AddBook("Game of Thrones","George R. R. Martin",2342,true)

const container = document.getElementById("library")

setUpLibraryItem(0)
setUpLibraryItem(1)

function setUpLibraryItem(i){

    const bookDiv=document.createElement("div")
    container.appendChild(bookDiv);

    const bookRemove=document.createElement("button")
    bookRemove.textContent="X"
    bookDiv.appendChild(bookRemove)
    bookRemove.addEventListener("click",()=>{
        removeLibraryItem(i,bookDiv)
    })
    bookRemove.classList.add("removeButton")

    const bookTitle=document.createElement("h4")
    bookTitle.textContent=myLibrary[i].title
    bookDiv.appendChild(bookTitle)

    const bookAuthor=document.createElement("p")
    bookAuthor.textContent=myLibrary[i].author
    bookDiv.appendChild(bookAuthor)

    const bookPages=document.createElement("p")
    bookPages.textContent=myLibrary[i].pages + " pages"
    bookDiv.appendChild(bookPages)

    const bookRead=document.createElement("button")
    if(myLibrary[i].read){
        bookRead.textContent="Read"
        bookRead.classList.remove("unreadButton")
        bookRead.classList.add("readButton")
    } else {
        bookRead.textContent="Not yet read"
        bookRead.classList.remove("readButton")
        bookRead.classList.add("unreadButton")
    }
    bookDiv.appendChild(bookRead)
    bookRead.addEventListener("click",()=>{
        toggleReadStatus(i,bookRead);
    })

    bookDiv.dataset.index=i
}

function removeLibraryItem(i,bookDiv){
    container.removeChild(bookDiv)
    myLibrary.splice(i,1)
}
function toggleReadStatus(i,bookRead){
    if(myLibrary[i].read){
        bookRead.textContent="Not yet read"
        bookRead.classList.remove("readButton")
        bookRead.classList.add("unreadButton")
        myLibrary[i].read=false
    } else {
        bookRead.textContent="Read"
        bookRead.classList.remove("unreadButton")
        bookRead.classList.add("readButton")
        myLibrary[i].read=true
    }
}
const newBookButton=document.getElementById("newBookButton")
const formDiv=document.querySelector(".formDiv")

newBookButton.addEventListener("click",()=>{
    formDiv.classList.remove("hidden")
})

const newBookForm = document.getElementById("newBookForm")
newBookForm.addEventListener("submit",function(event){
    event.preventDefault();
    
})
const addBookButton=document.getElementById("addBookButton")
addBookButton.addEventListener("click",()=>{
    
    title=document.getElementById("title").value
    author=document.getElementById("author").value
    pages=document.getElementById("pages").value
    read=document.getElementById("read").checked
 
    AddBook(title,author,pages,read)
    setUpLibraryItem(myLibrary.length-1)
    
    formDiv.classList.add("hidden")
})
