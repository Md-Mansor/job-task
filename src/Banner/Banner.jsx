import { motion, AnimatePresence } from "framer-motion";
import image1 from "../Asset/1.png"
import image2 from "../Asset/2.PNG"
import image3 from "../Asset/3.PNG"

const Banner = ({ image }) => {
    return (
        <div>
            <AnimatePresence>
                <motion.img
                    key={image1}
                    src={image1}
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </AnimatePresence>
        </div>
    );
};

export default Banner;