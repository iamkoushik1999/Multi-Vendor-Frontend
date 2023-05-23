import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "../../styles/styles";

const Wishlist = ({ setOpenWishlist }) => {
  const wishlistData = [
    {
      name: "Iphone 14 Pro Max",
      description: "Test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro Max",
      description: "Test",
      price: 245,
    },
    {
      name: "Iphone 14 Pro Max",
      description: "Test",
      price: 645,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-[#fff] flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>
          {/* Wishlist single items */}
          <br />
          <div className="w-full border-t">
            {wishlistData &&
              wishlistData.map((i, index) => (
                <WishlistSingle key={index} data={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WishlistSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className={`w-full flex items-center`}>
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://m.media-amazon.com/images/I/71NTRxfV1vL._UX569_.jpg"
          alt="items"
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222]">
            Total: ${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;