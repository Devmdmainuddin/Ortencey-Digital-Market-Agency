import Bredcumb from '../../components/shared/Bredcumb';
import Container from '../../components/shared/Container'
import { useAddProductMutation } from '../../Featured/ProductAPI/productApi';
// import {imageUpload} from '../../utils/index'
import Swal from 'sweetalert2';
const AddProductCard = () => {
    const [addProduct] = useAddProductMutation()

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const form = e.target;
        // const image_url = form.image.files[0]
        // const image = await imageUpload(image_url)
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const description = form.descaption.value;
        const dimensions = form.dimensions.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const color = form.color.value;
        const availability_status = form.availability_status.value;
        const return_policy = form.return_policy.value;
        const weight = form.weight.value;
        const warranty_information = form.warranty_information.value
        const stock = form.stock_levels.value;
        const tags = form.tag01.value;

        const createAt = (new Date()).toDateString();


        const info = {
            // image,
            title,
            brand,
            price,
            color,
            tags,
            description,
            category,
            createAt,
            availability_status,
            return_policy,
            stock,
            weight,
            warranty_information,
            discount,
            dimensions,

        };

        try {
            console.log(info);
            await addProduct(info)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create product  ",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create product items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };
    return (
        <div>
            <Bredcumb />
            <Container>

                <form action="" onSubmit={handleAddProduct} className="pb-10">

                    <div className='mt-10  '>

                        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold my-9 capitalize'>add product</h2>
                        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label htmlFor="title">title</label>
                                <input name='title' type='text' placeholder='title ' className="mt-2 w-full py-[13px] px-[11px] border outline-0" />
                            </div>
                            {/* descaption */}
                            <div>
                                <label htmlFor="descaption">descaption</label>
                                <input name='descaption' type='text' placeholder='description ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* price */}
                            <div>
                                <label htmlFor="price">price</label>
                                <input name='price' type='number' placeholder=' price ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* discount */}
                            <div>
                                <label htmlFor="discount">discount</label>
                                <input name='discount' type='number' placeholder='discount ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* dimensions */}
                            <div>
                                <label htmlFor="dimensions">dimensions</label>
                                <input name='dimensions' type='text' placeholder=' dimensions ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* weight */}
                            <div>
                                <label htmlFor="weight">weight</label>
                                <input name='weight' type='text' placeholder='weight' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>

                            {/* stock */}
                            <div>
                                <label htmlFor="stock_levels" className='capitalize'>stock</label>
                                <input name='stock_levels' type='number' placeholder='stock levels' className='w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* image */}
                            <div>
                                <label htmlFor="image" className='capitalize'>image</label>
                                <input name='image' type='file' multiple placeholder='image ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* thumbnail */}

                            {/* color */}
                            <div>
                                <label htmlFor="color">color</label>
                                <select name="color" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    <option value='#FF0000'>Red</option>
                                    <option value='#FFFF00'>Yellow</option>
                                    <option value='#0000FF'>Blue</option>
                                    <option value='#FFA500'>Orange</option>
                                    <option value='#A52A2A'>Brown</option>
                                    <option value='#008000'>Green</option>
                                    <option value='#800080'>Purple</option>
                                    <option value='#87CEEB'>Sky</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="tag01" className='capitalize'>tags</label>
                                <div className='mt-2 border'>
                                    <input name='tag01' type='text' placeholder='tag01' className='w-full py-[13px] px-[11px] border-b outline-0' />
                                </div>

                            </div>


                            {/* return */}
                            <div>
                                <label htmlFor="return_policy">return</label>
                                <input name='return_policy' type='text' placeholder='return policy ' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>
                            {/* warranty */}
                            <div>
                                <label htmlFor="warranty_information">warranty</label>
                                <input name='warranty_information' type='text' placeholder='warranty information' className='mt-2 w-full py-[13px] px-[11px] border outline-0' />
                            </div>


                            {/*availability  */}
                            <div>
                                <label htmlFor="availability_status">availability</label>
                                <select name="availability_status" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out Of Stock">Out Of Stock</option>
                                </select>
                            </div>


                            {/* brand */}
                            <div>
                                <label htmlFor="brand">brand</label>
                                <select name="brand" id="" className='mt-2 w-full py-[13px] px-[11px] border outline-0'>
                                    <option value="SoundWave">SoundWave</option>
                                    <option value="GreenLife">GreenLife</option>
                                    <option value="TechVision">TechVision</option>
                                    <option value="ComfortSeat">ComfortSeat</option>
                                    <option value="ChefMaster">ChefMaster</option>
                                    <option value="ProGamer">ProGamer</option>
                                    <option value="UrbanStyle">UrbanStyle</option>
                                </select>
                            </div>
                            {/* category */}
                            <div >
                                <label htmlFor="category">category </label>

                                <select name="category" id="" className=' w-full py-[13px] px-[11px] border outline-0'>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Kitchen">Kitchen</option>
                                    <option value="Gaming Accessories">Gaming Accessories</option>
                                    <option value="Fashion">Fashion</option>
                                </select>



                            </div>


                        </div>
                    </div>
                    <div className=" mt-6">
                        <input type="submit" value="Add product" className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[33px]" />
                    </div>
                </form>

            </Container>
        </div>
    );
};

export default AddProductCard;