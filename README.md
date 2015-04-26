> "Oh a new project! Let's take some time to configure [insert anything about project/code management] ..."
>
> – Everyone

<p align="center">
  <img src="./docs/haha-no.gif"/>
</p>

# Usage
```
npm install project-init -g
cd /path/to/project
project-init
```

# Options
```
Usage: project-init [options]

Options:

  -f, --file <cfgfile>    add your own configuration file
  -r, --repo <url>        init & clone a git repository

Examples:

  $ project-init -f config.json
  $ project-init -r git@github.com:rbaumier/project-init.git
```

# Configuration
It contains every action you want to perform. If configuration file is not defined, we'll first look into configurations/user/config.json, then configurations/default/config.json. Do not modify the default config.json, it'll be overrided in case of update.

``` javascript
{
  // copy content of a folder into project, you need to specify its path
  folder: String,

  // execute each command into folder
  commands: Array,

  // Add the license
  license: {
    // MIT, ISC...
    type: String,

    // The license file path, it'll be added at the end of the README
    file: String
  },

  // create a package.json with folder name, license if specified
  package: {
    // path to predefined package.json file, if not specified (e.g. package: {}), a default will be created with
    // folder as name, session user as author and license (if specified).
    file: String
  }
}
