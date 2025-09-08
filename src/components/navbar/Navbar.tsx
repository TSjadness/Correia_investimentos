import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";
import { Bar, Brand, Burger, Logo, Menu, Wrap } from "./styles";
import logo from "../../images/logo.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Bar
      as={motion.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Wrap>
        <Brand to="/">
          <Logo src={logo} alt="Correia Investimentos" loading="lazy" />
        </Brand>

        <Burger onClick={() => setOpen((v) => !v)}>☰</Burger>
        <Menu open={open} onClick={() => setOpen(false)}>
          <NavLink to="/metodo">Método</NavLink>
          {/* <NavLink to="/depoimentos">Quem aplicou</NavLink> */}
          <NavLink to="/especialista">Especialista</NavLink>
          <NavLink to="/comparativo">Com x Sem</NavLink>
          <NavLink to="/bonus">Bônus</NavLink>
          {/* <NavLink to="/faq">FAQ</NavLink> */}
          <NavLink to="/contato">Contato</NavLink>
        </Menu>
      </Wrap>
    </Bar>
  );
};
