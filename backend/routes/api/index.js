const router = require('express').Router();

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
});

const { restoreUser } = require('../../utils/auth.js');

// GET /api/restore-user
router.use(restoreUser);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

const { Policy } = require('../../db/models');
router.get('/policy', async (_req, res) => {
  const policy = await Policy.findOne({
      where: {
        name: 'Bilbo'
      }
    });
  setTokenCookie(res, policy);
  return res.json({ policy });
});

module.exports = router;