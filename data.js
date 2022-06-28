export let data = 
[
    {   id:'001',  
        text: "Hello World,how are you?",
        hasChild: true,
        showChild: false,
        childComments: [
          { id:'002',
            text: "I am doing good how about you?",
            hasChild: true,
            showChild: false,
            childComments: [
              { id:'003',
                text: "amazing aah :D",
                hasChild: true,
                showChild: false,
                childComments: [
                  {id:'004',
                    text: "Me too buddy?",
                    hasChild: false,
                    showChild: false,
                    childComments:[]
                  },
                ],
              },
            ],
          },
          {id:'005',
            text: "Pretty Good ya?",
            hasChild: false,
            showChild: false,
            childComments: [],
          },
        ],
     },

     { 
       id:'A001',  
     text: "Hello World,how are you?",
     hasChild: true,
     showChild: false,
     childComments: [
       { id:'A002',
         text: "I am doing good how about you?",
         hasChild: true,
         showChild: false,
         childComments: [
           { id:'A003',
             text: "amazing aah :D",
             hasChild: true,
             showChild: false,
             childComments: [
               {id:'A004',
                 text: "Me too buddy?",
                 hasChild: false,
                 showChild: false,
                 childComments:[]
               },
             ],
           },
         ],
       },
       {id:'A005',
         text: "Pretty Good ya?",
         hasChild: false,
         showChild: false,
         childComments: [],
       },
     ],
  }
      
    ]
