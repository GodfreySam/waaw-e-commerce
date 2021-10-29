import React, { useState } from "react";
import "./header.css";
import clsx from 'clsx';
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Drawer, Grid, IconButton, InputBase, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ChevronLeft, ChevronRight, Inbox, LocalMallOutlined, Mail, Menu} from "@material-ui/icons";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	},
	hide: {
	  display: 'none',
	},
	drawer: {
	  width: drawerWidth,
	  flexShrink: 0,
	},
	drawerPaper: {
	  width: drawerWidth,
	},
	drawerHeader: {
	  display: 'flex',
	  alignItems: 'center',
	  padding: theme.spacing(0, 1),
	  // necessary for content to be below app bar
	  ...theme.mixins.toolbar,
	  justifyContent: 'flex-start',
	},
  }));

const Header2 = ({ cartItems }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className="container">
			<Grid className="header2">
				<Grid className="header2__left" item sm={1} xs={1}>
					<Link to="/" className="logo">
						Frotoo
					</Link>
				</Grid>
				<Grid className="header2__middle" item sm={12} xs={8}>
					<Grid className="header2__lists">
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/products" className="link-items">
								Menu
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/" className="link-items">
								Pages
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/products" className="link-items">
								Gallery
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/" className="link-items">
								Blog
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/products" className="link-items">
								Shop
							</Link>
						</Grid>
						<Grid className="header2__list" item sm={2} xs={2}>
							<Link to="/products" className="link-items">
								Elements
							</Link>
						</Grid>
					</Grid>
				</Grid>
				<Grid className="header2__right" item sm={4} xs={3}>
					<Grid className="header2__right--searchbox" item sm={12}>
						<InputBase className="header2__right--input" placeholder="Search..." />
						<SearchIcon className="header2__right--search" />
					</Grid>

					<Grid className="header2__right--cart" item sm={12}>
						<p>Cart Items</p>
						<Link to="/cart" className="link-items">
							<LocalMallOutlined className="header2__right--bag" />
							<span className="cart-length">
								{cartItems.length === 0 ? "" : cartItems.length}
							</span>
						</Link>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={handleDrawerOpen}
							className={`header2__right--ham ${clsx(open && classes.hide)}`}
						>
							<Menu />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
				</div>
				<Divider />
				<List className="header__drawer">
					{["Menu", "Pages", "Gallery", "Blog", "Shop", "Elements"].map(
						(text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						),
					)}
				</List>
				<Divider />
			</Drawer>
		</div>
	);
};

export default Header2;