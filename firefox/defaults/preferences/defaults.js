/*
  A script that sets the default preferences.

  Copyright 2012 Disconnect, Inc.

  This program is free software: you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program. If not, see <http://www.gnu.org/licenses/>.

  Authors (one per line):

    Brian Kennish <byoogle@gmail.com>
*/

/**
 * The Disconnect preferences.
 */
pref('extensions.disconnect.build', 0);
pref(
  'extensions.disconnect.whitelist',
  '{"latimes.com":{"Google":true},"mediafire.com":{"Facebook":true},"salon.com":{"Google":true},"udacity.com":{"Twitter":true}}'
);
pref('extensions.disconnect.searchHardened', false);
pref('extensions.disconnect.browsingHardened', true);
