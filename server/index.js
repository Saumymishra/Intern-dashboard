import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// ✅ CORS setup (Allow all origins)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Additional CORS headers (for extra safety on some hosts)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  next();
});

app.use(express.json());

// ✅ Mock User Data
const userData = {
  name: "Somu",
  referralCode: "somu2025",
  totalDonations: 2500,
};

// ✅ Mock Leaderboard Data
const leaderboardData = [
  { name: "Priya", referralCode: "priya2025", totalDonations: 3000 },
  { name: "Somu", referralCode: "somu2025", totalDonations: 2500 },
  { name: "Rahul", referralCode: "rahul2025", totalDonations: 1800 },
  { name: "Ananya", referralCode: "ananya2025", totalDonations: 1500 },
  { name: "Karan", referralCode: "karan2025", totalDonations: 1200 },
  { name: "Meera", referralCode: "meera2025", totalDonations: 950 },
  { name: "Arjun", referralCode: "arjun2025", totalDonations: 800 },
  { name: "Kavya", referralCode: "kavya2025", totalDonations: 650 },
];

// ✅ API Routes
app.get("/api/user", (req, res) => {
  res.json(userData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboardData);
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
