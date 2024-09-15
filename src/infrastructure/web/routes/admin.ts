import * as webpush from 'web-push';

import { Request, Response, Router } from 'express';
import adminExecuteRule from '../executeRule/admin-execute-rule';

const router = Router();

router.route('/customers').get(adminExecuteRule('viewAllCustomers'));
router.route('/vendors').get(adminExecuteRule('fetchAllVendors'));
router.route('/vendor').post(adminExecuteRule('createVendor'));
router
  .route('/:id')
  .delete(adminExecuteRule('deleteVendor'))
  .patch(adminExecuteRule('updateVendor'))
  .get(adminExecuteRule('findVendorById'));
export { router as AdminRoute };
