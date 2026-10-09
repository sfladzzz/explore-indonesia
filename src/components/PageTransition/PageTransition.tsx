import { motion } from "framer-motion"
import type { ReactNode } from "react"

type PageTransitionProps = {
    children: ReactNode
}

function PageTransition({
    children,
}: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition