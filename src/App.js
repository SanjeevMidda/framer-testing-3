import { useEffect, useState } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <AnimatePresence>
        {status && (
          <motion.div
            className="square"
            animate={{
              rotate: "180deg",
              opacity: 1,
            }}
            exit={{ rotate: "-180deg", opacity: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
