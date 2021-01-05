<div style="text-align:center"><img src="./assets/markscript.png" width="250px" height="250px" /></div>

# Markscript

Typescript library to generate Markdown.

## Usage

```
import MarkScript from "mark-script";

const markScript = new MarkScript();
```

### Heading

```
markScript.addHead(string, int);
```

#### Example

---

```
markScript.addHead("Sample", 1);
```

↓

# Sample

---

```
markScript.addHead("Sample", 2);
```

↓

## Sample

---

```
markScript.addHead("Sample", 3);
```

↓

### Sample

---

```
markScript.addHead("Sample", 4);
```

↓

#### Sample

---

```
markScript.addHead("Sample", 5);
```

↓

##### Sample

---

```
markScript.addHead("Sample", 6);
```

↓

###### Sample

---

### Text

```
import MarkScript, { TEXT_TYPE } from "mark-script";

.
.
.

markScript.addText(string, TEXT_TYPE?);
```

#### Example

##### Normal

```
markScript.addText("Sample");
```

↓  
Sample

##### highlight

```
markScript.addText("Sample", TEXT_TYPE.HEGHLIGHT);
```

↓  
**Sample**

##### Italic

```
markScript.addText("Sample", TEXT_TYPE.ITALIC);
```

↓  
_Sample_

### Code

#### Example

##### Inline

```
markScript.addCode("console.log(\"Sample\")");
```

↓  
`console.log("Sample");`

##### Block

```
markScript.addCodeBlock("#include <stdio.h>\nint main() {\n\t\tprintf(\"Hello World\");\n}");
```

↓

```
#include <stdio.h>
int main() {
  printf("Hello World");
}
```

### Return

```
markScript.addReturn();
```

↓

### List

```
import MarkScript, { CommonList, NumberingList } from "mark-script";

.
.
.

const xxxx = new CommonList(string[], CommonList?);
markScript.addList(CommonList);

const xxxx = new NumberingList(string[], NumberingList?);
markScript.addList(NumberingList);
```

#### Example

##### Bullet

```
const clist = new Common1List(["list1", "list2", "list3"]);
markScript.addList(clist);
```

↓

- list1
- list2
- list3

---

```
const clist1 = new Common1List(["list1", "list2", "list3"]);
const clist2 = new Common1List(["plist1", "plist2", "plist3"], clist1);
markScript.addList(clist2);
```

↓

- plist1
- plist2
- plist3
  - list1
  - list2
  - list3

### Link

#### Example

```
markScript.addLink("example", "http://example.com/");
```

↓
[example]("http://example.com/")
