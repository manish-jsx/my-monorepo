"use client";
import classes from './AdminFooter.module.css';

export  function AdminFooter() {
  return (
    <footer className={classes.footer}>
      © {new Date().getFullYear()} Admin Panel. All rights reserved.
    </footer>
  );
}