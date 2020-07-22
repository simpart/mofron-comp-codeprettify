# mofron-comp-codeprettify
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

text component for code-prettify


# Install
```
npm install mofron mofron-comp-codeprettify
```

# Sample
```html
<setting>
    <tag load="mofron-comp-codeprettify">Code</tag>
</setting>

<Code lang="py">print("CodePrettify Component")</Code>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | string | code contents |
| | | | undefined: call as getter |
| | lang | string | lang type (without 'lang-') |
| | editable | boolean | true: code is editable |
| | | | false: code is not editable |

