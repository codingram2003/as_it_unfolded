import { useRef, useLayoutEffect, useCallback, useState} from "react"
import {useTransform, useSpring, motion, useScroll} from 'framer-motion'
import logo from './aiu.jpg'

const SmoothScroll = () => {
    const scrollRef = useRef(null)
    const ghostRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportW, setViewportW] = useState(0)
  
    useLayoutEffect(() => {
      scrollRef && setScrollRange(scrollRef.current.scrollWidth)
    }, [scrollRef])
  
    const onResize = useCallback(entries => {
      for (let entry of entries) {
        setViewportW(entry.contentRect.width)
      }
    }, [])
  
    useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver(entries => onResize(entries))
      resizeObserver.observe(ghostRef.current)
      return () => resizeObserver.disconnect()
    }, [onResize])
  
    const { scrollYProgress } = useScroll();
    const transform = useTransform(
      scrollYProgress,
      [0, 1],
      [0, -scrollRange + viewportW]
    )
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(transform, physics)
  
    return (
      <>
        <div className="scroll-container">
          <motion.section
            ref={scrollRef}
            style={{ x: spring }}
            className="thumbnails-container"
          >
            <div className="thumbnails App">
              
              <div className="ldd-h4">
              <motion.h3 className='ldd thumbnail'>LOCKDOWNDIARIES</motion.h3>
      <h4>presents</h4>
              </div>
              <motion.h3 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:3}} className='title'>As It Unfolded</motion.h3>
              <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
              Our parents are everything to us. Nothing really matters for them other than our happiness. They will do anything to make us happy, to make our lives better. We all are lucky to have such parents. Their sacrifices, their hardwork, their way of teaching us are very different and no one in this world can do like them.
</motion.h4> <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}className="description">
Sometimes, they hide  things from us. But, what if they hide the truth from their own children? What if the child gets to know the truth? How will he react to that? Why did they hide the truth? What is the truth?
              </motion.h4>
              <h1 className="purples">ACKNOWLEDGEMENT</h1>
              <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
              Firstly, I still can’t believe that this is just happened. It’s my dream to write a book and today this book is in your hand and I don’t have words to describe my feeling. Many people became the reason to write this book (directly and indirectly). First of all, I thank my parents who became the strong foundation and are the 
inspiration to do this. I feel very happy to dedicate this book to my beloved parents. Secondly to all my teachers who shaped me, who taught me what life is, how one should lead a life. I thank Shri Rajesh Wali sir (founder of Sai Niketan Institutions) for your motivational words. 
</motion.h4>
<motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
I thank Shri Mahantesh Mudalagi sir (founder of Sai Sankalp) for your amazing words. I thank Shri Sudhanva sir for your kind support and teachings. I thank our beloved Praveen Yaragatti sir for your wonderful words which always pushed us to do something. I thank Satish AG sir, Lomesh sir for their kind support and also I thank Sureshkumar sir for their words and guidance. 
</motion.h4>
<motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
Also I thank our BP Harish sir for your words and I thank all the teachers who taught me something valuable in life and who stood for me when things were not working. I thank Sagar sir, Bhushannavar sir, Kaparatti sir, Shinde sir, Savant sir, Aslam sir, Pareeth sir, Chouan sir, Abhijit sir and all my teachers. Without your effort I’m nothing. 
</motion.h4>
              <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
              And I thank all my friends who helped me in writing this book. I thank Shriram for his amazing support, I thank Ruthwik for his words, I thank Prajwal for his contribution. I thank Ranjeeth, Skandan, Sumukh, Sujay, Samarth, Praveen, Yeshwanth, Shivamurthy, Ganga Lokesh, Rahul, Sheehan and all my friends for their amazing support. I thank Vishwajeethu and Sujay  Vikram for their view on this. I thank Sushilkumar, Abhinandan, Amit, Arun, Vinayak, Mujahid, and all my friends who made this possible.
              </motion.h4>

              <h1 className="purples">AUTHOR'S NOTE</h1>
              <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
              We all have our own dreams in our life and all we want is to achieve our dream and enjoy the experience being there, completing our goal. My dream was to write my own book and I felt happy throughout the process. I enjoyed reading books and when I first thought about writing a book I didn’t know how the process is and as I started writing it just moved like that. Also there were so 
many learnings in this writing process.
              </motion.h4>
              <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
              Good support from the peers and well-wishers fueled 
this process and made this process easy and enjoying at the same time. In this particular book I tried to take you to the different world and give you one amazing experience. I’m sure you are going to enjoy this book. Sometimes all we have to do is what we love to do. There is nothing much important than our happiness, 
happiness of our parents, happiness of our teachers and 
the happiness of our loved ones. 
              </motion.h4>   
              <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
              Other than this nothing really matters.
This is my first experience of writing something like this and I’m not sure how it feels you. So make sure you read it and tell me how it is. One thing is for sure, there is an honest effort and pure love behind this. Just give it a try and I’m sure you never going to regret this. Any 
mistake in this, please do forgive me and lastly thank 
you for choosing this book to read.

              </motion.h4>   
              <motion.h4 initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:4}}  className="description">
              Make sure you write at <a className="email" href="mailto:sunilsanbaragi@gmail.com">sunilsanbaragi@gmail.com</a> do share your opinions, suggestions anything I would love 
to hear from you. <br/><br/>
<span className="read">HAPPY READING.</span><br/><br/>
Yours,<br/>
Sunil  
              </motion.h4>  
              <div className="container">
              <span className="read">CHAPTER 1</span><br/><br/>
              After having dinner with all, he came back to his 
room, sat on the bed and started thinking about the next day. As it will be his special day, he was very curious and happy at the same time. He had done with all his homework and now he’s free until bed time. He stood up, went to his cupboard to see the dress which he’s going to wear the next day. Its 4th time he’s opening the cupboard and staring at the dress. He also took the packet from the cupboard, looked around it, turning it round. He told his mom to buy different one but his 
mother didn’t find that and she brought this at the end. He smiled at himself and closed the cupboard and kept the packet in his bag. He sat there on the bed and started thinking of the next day. Suddenly his mom came in 
“Hey,  . . . . . . . . . . . .
                </div>      
      <motion.img initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration:3}} src={logo} alt='cover' className='cover thumbnail'></motion.img>
      <button class="button-56 thumbnail" onClick={() => window.open("https://bit.ly/order_As_It_Unfolded")} >Buy Now!</button>
       
       <div>
              <motion.h3 className='ldd thumbnail'></motion.h3>
              </div>
              <div>
              <motion.h3 className='ldd thumbnail'></motion.h3>
              </div>
              <div>
              <motion.h3 className='ldd thumbnail'></motion.h3>
              </div>
        
      
            </div>
          </motion.section>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
      </>
    )
  }
  
  export default SmoothScroll
  