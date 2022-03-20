import express from "express";

import { getCustomers ,createCustomer,updateCustomer} from "../controllers/customers.js";

const router = express.Router();

router.get('/', getCustomers);
router.post('/', createCustomer);
router.patch('/:id', updateCustomer);


export default router;