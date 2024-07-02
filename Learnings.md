1. React batches the changes i.e it only re renders after all the changes to the state variables are made through event handlers or statechngers

2. usestate scans a queue of updates to changes the state value finally.

3. in react strict mode two times the intitial rendering happens.

<!-- *******IMPORTANT THING -->

4.  There are two scripts in js and one is CommonJs in which we can use only require in importing things but in ECMA script import can be used , which to use must be specified im package.json file which node by default reads.

5.  for common js we use module.exports and for ECMA we use only export {var name};

6.  require are syncronous but import are not sync

7.  do not apply event listners on global objects as they may run the function on vanished components.

8.  for every componenet in react there are some global objects already there which we can access through the hooks like usparams , uselocation and also we have another things.

9.  hooks must always be called at the top of the components.

10. zindex is very nice thing.

11. if outermost flex container is always set at 100% width is set for a flex container then it cannot be shrunken from it.

12. When you create a flex container various default flex rules come into play.
    Two of these default rules are flex-direction: row and align-items: stretch. This means that flex items will automatically align in a single row, and each item will fill the height of the max element of the container.

13. controlled form verses uncontrolled form.
    link for --- "https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/"

    link2 : "https://legacy.reactjs.org/docs/uncontrolled-components.html"

14. refs can only be used in case of DOM elements or class components.

15. use cookies if we want to store the data of the user which must be deleted after some time.

16. cookies are always attached to document

17. grid auto-fit and minmax property is very good thing to handle the proper griddig automatically acc to content.
    link - https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/

18. grid does not calculates the size of cols first it just assign space to them based on calculation that we made through grid-template rows and minmax. (it is not flexible like flexbox which calculates the space each container will take and then assign the width to each container)

19. cleanup function or return fn in useeffect will be executed when the component will unmount so we can optimise the code bit faster here without making api requests at every time.

20. sometimes the scroll bar also decrease the width when it is shown

21. always try to make things dynamic don't preload them like in case of videos if you say you will do everything via css pseudo class then its quit possible that you preload the videos in them and thus increase the size of the document.

22. re rendering will not require much power then loading everything.

23. for transition to work its initial class must be there otherwise it will be glitch.

24. navigating to same comp does not cause re-mounting

25. The default value of flex-shrink of a flex item is 1, which means the card\_\_content should be able to shrink as much as it wants to. Surprisingly, the result is not what we expected!

26. min-width: 0px; very important property for solving the above problem.

27. div's by default widt is 100% of its parent but for inline block its equal to its content width.

28. != implictly converts the types also to make equal but !== does not.
29. similarly == does but === not.

30. react does fake navigation so whatever is done to global window object they are unchanged when nav from one compo to other so take care of it one such case is scroll location

31. every reacted element is first class citizen so we can do whatever we can do with it.

32. useeffect can track any value in its dependency list

The flexbox algorithm refuses to shrink a child below its minimum size.

33. use effect depedency array must be a pure value not a array

1. promises are added to the queue only after the main frame executes
1. for functions inside any fn or global scope they firstly added to the environment table
   example ->
   fn hello(){
   let val;
   let val2;
   function hello2(){
   .... do something -----> env table at the start is like this ->
   val -> undefined
   val2 -> undefined
   hello2 -> closure(args,opcode,parent-env::env::global env)  
    }
   }

fn hello(){
let val;
let val2;
let fn = function hello2(){
.... do something -----> env table at the start is like this ->
val -> undefined
val2 -> undefined
fn -> undefined  
 }
}
