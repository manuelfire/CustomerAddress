import express from "express";

import { getCustomers,getCustomer ,createCustomer,updateCustomer} from "../controllers/customers.js";

const router = express.Router();

router.get('/', getCustomers);
router.get('/:id', getCustomer);
router.post('/', createCustomer);
router.patch('/:id', updateCustomer);


export default router;