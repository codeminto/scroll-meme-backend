/**
 * ----------- MEMEFY ----------
 */

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// create app
const app = express();

// connect to db
require("./utils/db")(DB_URI);

// initialize middlewares
app.use(express.json());
app.use(cors());

// initialize routes
app.use("/meme", require("./routes/meme.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/tableland", require("./routes/tableland.route"));
app.use("/contest-submission", require("./routes/contest-submission.route"));
app.use("/contest", require("./routes/contest.route"));
app.use("/prize-claimed", require("./routes/prize-claimed.route"));
app.use("/winners-announced", require("./routes/winners-announced.route"));

// Event listener 
const { CreateContestEventListener } = require('./events/CreateContestEvent');
const { ContestSubmissionEventListener } = require('./events/ContestSubmissionEvent');
const { PrizeClaimedEventListener } = require('./events/WinnerClaimedEvent');
const { UpvoteEventListener } = require('./events/UpvoteEvent');
const { WinnersCalculatedEventListener } = require('./events/WinnersAnnouncedEvent');
CreateContestEventListener();
ContestSubmissionEventListener();
PrizeClaimedEventListener();
UpvoteEventListener();
WinnersCalculatedEventListener()
// start server
app.listen(port, () => console.log(`[API] Server started on port - ${port}`));