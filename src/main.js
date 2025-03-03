/**
 * Privacy App
 *
 * @author Georg Ehrke
 * @copyright 2019 Georg Ehrke <oc.list@georgehrke.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
import 'core-js/stable'
import Vue from 'vue'
import { linkTo } from '@nextcloud/router'
import { translate, translatePlural } from '@nextcloud/l10n'
import { getRequestToken } from '@nextcloud/auth'

const Admins = () => import('./components/Admins.vue')
const Location = () => import('./components/Location.vue')
const Encryption = () => import('./components/Encryption.vue')
const Shares = () => import('./components/Shares.vue')

// CSP config for webpack dynamic chunk loading
// eslint-disable-next-line
__webpack_nonce__ = btoa(getRequestToken())

// Correct the root of the app for chunk loading
// OC.linkTo matches the apps folders
// OC.generateUrl ensure the index.php (or not)
// We do not want the index.php since we're loading files
// eslint-disable-next-line
__webpack_public_path__ = linkTo('privacy', 'js/')

Vue.prototype.$t = translate
Vue.prototype.$n = translatePlural
Vue.prototype.$is_admin = OC.isUserAdmin()

// The nextcloud-vue package does currently rely on t and n
Vue.prototype.t = translate
Vue.prototype.n = translatePlural

const location = new Vue({
	el: '#privacy_where_location',
	render: h => h(Location),
})
const admins = new Vue({
	el: '#privacy_access_admins',
	render: h => h(Admins),
})
const shares = new Vue({
	el: '#privacy_access_shares',
	render: h => h(Shares),
})
const encryption = new Vue({
	el: '#privacy_access_encryption',
	render: h => h(Encryption),
})

export default { location, admins, shares, encryption }
