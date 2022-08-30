# Card Carousel in Next.js

## Things to remember

### SCSS
1. You need to install sass using yarn add sass -D (sass is a developer dependency since it compiles to css during the build).
1. In order to use sass in Next.js you can simply create a Home.module.scss instead of .css and it will work.
1. $ is used before the name of variables in sass.
1. % is used before placeholder classes (which are essentially css code blocks that could be used elsewhere). In order to use them somewhere you have to @extend the particular placeholder class.
1. To create a placeholder class that can take in a particular value, you use mixins. Their names start with a @mixin then a space then the name of the mixin. To use them you use @include that particular mixin.
1. You can use functions if you want something returned from sass. To use functions. Function names start with @function and they can be called by simply using the name of the function and closed brackets with the input. For example:

    ```scss
    @function product(multiplicand1, multiplicand2){
        @return calc(multiplicand1 * multiplicand2)
    }

    .container{
        width: product(80px, 5)
    }
    ```
    Note in css you can use calc() around situations where you need to multiply a value with units with a number. Else, alternatively you can multiply the two values with a #{} and then add +'px' after it (This is the approach taken in this example, although using calc() is better).
### CSS
1. To blur something, you can simply do filter: blur(px) where px is the number of pixels. The more the pixels, the greater the blur.
1. To round out a div's corners you can use border-radius. The greater the pixel value, the rounder the edges.
1. When you want something to do something on class change, you can use transition and mention all the properties you'd like to change and the time duration and it will auto add the frames to move it from it's previous position to it's current position. Eg:
    ```scss
    .cardA{
        width: 100px;
        height: 100px;
        font-size: 10px;
        line-height: 10px;
        filter: blur(2px);
        transform: translateX(100px) translateY(100px) translateZ(100px)
        transition: transform 2s, filter 2s, width 2s, height 2s, font-size 2s, line-height 2s;
    }
### Next.js/Javascript
1. In order to add multiple classes from a module, you need to use {} with backticks within. Within the backticks, You need to add ${} and within those, you can add styles.container and so on. For multiple classes, it will look as follows:
    ```jsx
    <div className={`${styles.item} ${styles.a}`}>A</div>
    ```
1. To change classes based on a state, you can store styles classes within a state and call it dynamically for example:
    ```jsx
    const [arrangement, setArrangement] = useState([styles.front, styles.left, styles.behind, styles.right])

    return (
        
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div className={`${styles.item} ${styles.a} ${arrangement[0]}`}>A</div>
                <div className={`${styles.item} ${styles.b} ${arrangement[1]}`}>B</div>
                <div className={`${styles.item} ${styles.c} ${arrangement[2]}`}>C</div>
                <div className={`${styles.item} ${styles.d} ${arrangement[3]}`}>D</div>
            </div>
        </div>
    )
    ```
1. In order to figure out how to execute a reduce function to change classes, simply chart out the first few movements or class changes and figure out the pattern. Then write the reduce function. A sample reduce function will look as follows:
    ```jsx
    const newPlayerClass = playerClass.reduce((prev: string[], curr: string, index) => {
      if(index < playerClass.length-1){
        prev.push(curr)
        return prev.slice()
      }
      prev.unshift(curr)
      return prev.slice()
    }, [])
    ```
