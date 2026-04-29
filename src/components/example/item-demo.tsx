import { FileTextIcon, ImageIcon, VideoIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

const files = [
  {
    icon: FileTextIcon,
    name: "Report Q4.pdf",
    desc: "Modified 2 hours ago",
    badge: "PDF",
  },
  {
    icon: ImageIcon,
    name: "Hero image.png",
    desc: "Modified yesterday",
    badge: "PNG",
  },
  {
    icon: VideoIcon,
    name: "Intro reel.mp4",
    desc: "Modified last week",
    badge: "MP4",
  },
];

const ItemDemo = () => {
  return (
    <ItemGroup className="max-w-sm">
      {files.map((file, i) => (
        <>
          {i > 0 && <ItemSeparator key={`sep-${file.name}`} />}
          <Item key={file.name} variant="outline">
            <ItemMedia variant="icon">
              <file.icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{file.name}</ItemTitle>
              <ItemDescription>{file.desc}</ItemDescription>
            </ItemContent>
            <Badge variant="outline" className="ml-auto">
              {file.badge}
            </Badge>
          </Item>
        </>
      ))}
    </ItemGroup>
  );
};

export default ItemDemo;
