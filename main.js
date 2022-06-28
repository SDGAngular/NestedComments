import { data } from "./data.js";
var maxMargin=-999999;
var toggleInput=false;
var selectedComment={};

const commentsContainer = document.getElementById("cmnts-cntr");
renderWidget();
function renderWidget()
{
    
    data.forEach((eachData)=>{
        const newContainer = document.createElement('div');
        showComments(newContainer,eachData);
        newContainer.classList.add('comments-container');
        commentsContainer.appendChild(newContainer);
    });
    
    
    addEventListenerToShowReply();
}


function resetWidget(){
    commentsContainer.innerHTML=''
    renderWidget();

}
function showComments(parent,commentsData,margin=0,extraMargin='0px'){
    const newComment=createComment(parent,commentsData.id,commentsData.text,extraMargin,commentsData.childComments?commentsData.childComments.length:0);
    if(!commentsData.hasChild &&!commentsData.showChild){
        
        return
    }
    else if(commentsData.hasChild){
        commentsData.childComments.forEach(eachChildComment => {
            if(commentsData.showChild){
                maxMargin=Math.max(maxMargin,margin+25)
                showComments(newComment,eachChildComment,margin+25,(margin+25)+'px')
            }
            
        });
    }
    


}

function setSelectedReply(self){
    const parentElement= self.parentElement.parentElement ;
    console.log(parentElement);
    let textContent=parentElement.children[0].textContent
     data.forEach(eachComment=>{
        setShowValue(textContent,eachComment);
     })
     return textContent;
}

function showReply(){
    setSelectedReply(this);
    resetWidget();
    addEventListenerToShowReply();
    
}

function addEventListenerToShowReply(){
    Array.from(document.getElementsByClassName('shwreply')).forEach((eachButton)=>{
        eachButton.addEventListener('click',showReply,this)
    });
    Array.from(document.getElementsByClassName('reply')).forEach((eachButton)=>{
        eachButton.addEventListener('click',shwInput,this)
    });
}

function shwInput()
{   const textContent = setSelectedReply(this)
    toggleInput=!toggleInput;
    if(toggleInput){
        const newInputBox=document.createElement('div');
        newInputBox.innerHTML=`<div id="inpt-bx" class="input-box">
        <input id='inpt' placeholder="Enter your reply">
        <button id='sbmt'>Submit</button>
    </div>`;
    commentsContainer.appendChild(newInputBox);
    document.getElementById('sbmt').addEventListener('click',submitReply,this);

    }
    else{
        document.getElementById('inpt-bx').remove();
    }
}

function submitReply(){
 
    console.log(selectedComment);
    const target= document.getElementById('inpt').value;
    selectedComment.childComments.push({
        text:target,
        hasChild:false,
        childComments:[],
        showChild:false
        
    });
    selectedComment.hasChild=true;
    resetWidget();



}

function setShowValue(textContent,data)
{
    if(data.id===textContent){
        data.showChild=!data.showChild;
        console.log(data);
        selectedComment=data;
        return data;
    }
    
    
     if(data.hasChild){
        data.childComments.forEach((eachChildComment)=>{
         setShowValue(textContent,eachChildComment)
        })
    }
}

function  createComment(element,id, text,extraMargin,numberOfReplies) {
  const newComment = document.createElement("div");
 console.log(extraMargin);
 if(numberOfReplies===0){
    newComment.innerHTML = `<div class="comments-tab">
    <p class="dsn">${id}</p>
    <p class="cmnt-txt">${text}</p>
    <div class="links">
        
        <a class="reply">Reply</a>
    </div>

</div>`;
 }
 else{
    newComment.innerHTML = `<div class="comments-tab">
    <p class="dsn">${id}</p>
    <p class="cmnt-txt">${text}</p>
    <div class="links">
        <a class="shwreply">Show Replies(${numberOfReplies})</a>
        <a class="reply">Reply</a>
    </div>

</div>`;
 }
 
newComment.style.marginLeft = extraMargin;
element.appendChild(newComment);
return newComment;
};
