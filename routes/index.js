const homeRouter = require("./home.routes");
const authRouter = require("./auth.routes");
// const userRouter = require("./user.routes");
// const productRouter = require("./product.routes");
// const cartRouter = require("./cart.routes");
// const orderRouter = require("./order.routes");
// const paymentRouter = require("./payment.routes");

const routers = (app) => {
	app.use("/api/v1", homeRouter);
	app.use("/api/v1/auth", authRouter);
	// app.use("/api/v1/users", userRouter);
	// app.use("/api/v1/products", productRouter);
	// app.use("/api/v1/carts", cartRouter);
	// app.use("/api/v1/orders", orderRouter);
	// app.use("/api/v1/checkout", paymentRouter);
};

module.exports = routers;
