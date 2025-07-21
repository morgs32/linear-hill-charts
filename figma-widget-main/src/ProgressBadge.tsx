import {
  getColorForPercentage,
  rgbToHex 
} from 'lhc/index';
const { widget } = figma

const { 
  AutoLayout,
  Text
} = widget

interface IProps {
  progress: number
}

export function ProgressBadge({ progress }: IProps) {

  return (
    <AutoLayout
      name="Progress Badge"
      fill={rgbToHex(getColorForPercentage(progress / 10))}
      stroke="#000"
      cornerRadius={30}
      strokeWidth={2}
      overflow="visible"
      spacing={10}
      padding={{
        vertical: 6,
        horizontal: 11,
      }}
      horizontalAlignItems="center"
      verticalAlignItems="center"
    >
      <Text
        name="Issue progress"
        fill="#FFF"
        verticalAlignText="center"
        horizontalAlignText="center"
        lineHeight={12}
        fontFamily="Noto Sans"
        fontSize={13}
        fontWeight={800}
        textCase="upper"
      >
        {progress}
      </Text>
    </AutoLayout>
  )
  

}