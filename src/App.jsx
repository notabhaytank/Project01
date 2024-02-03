import 'remixicon/fonts/remixicon.css'
export default function App() {
    return (
        <>
            <nav className='flex lg:text-xl gap-7  py-8 px-10 lg:px-32 justify-end align-middle' >
                <ul className='flex align-middle gap-5'>
                    <li>About</li>
                    <li>News</li>
                    <li>Cart</li>
                </ul>
                <div id="icon" className='' >
                    <i className="ri-shopping-bag-2-fill"></i>
                </div>
            </nav>


            <section className=' lg:flex  px-10 lg:px-32 py-10'>
                <div id="left" className='lg:w-7/12'>
                    <h1 id="head" className=' text-[40px] lg:text-[85px] capitalize font-bold leading-snug  ' >Lightly padded Quilted Jacket in Recycled Polyster</h1>
                    <p id="text" className=' pt-5 lg:pt-10 text-lg lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequuntur deleniti praesentium quaerat quasi rerum similique temporibus totam. Commodi enim excepturi iusto numquam ratione.</p>
                </div>
                <div id="right" className='lg:w-5/12 lg:text-xl  lg:flex  lg:justify-end lg:items-end ' >
                    <div className=' pt-10 w-fit h-fit'>
                        <div className='border-t-2 py-3 w-80 px-5 flex justify-between border-black' ><p>Add to Cart</p><i className="ri-arrow-right-up-line"></i></div>
                        <div className='border-t-2 py-3 w-80 px-5 border-black'>Product Details</div>
                        <div className='border-t-2 py-3 w-80 px-5 border-black'>Shipping</div>
                    </div>

                </div>
            </section>



            <section id='image' className='px-8 lg:py-10 lg:px-20 ' >
                <img className='w-full rounded-2xl h-[70vh] object-cover ' src='https://images.unsplash.com/photo-1706716109264-ac80916f55ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </section>


        </>
    )
}