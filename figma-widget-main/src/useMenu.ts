import { showUI, uiDimensions } from './showUI'
import { useHillchartBag } from './useHillchartBag'

const { widget } = figma

export function useMenu() {
  const widgetId = widget.useWidgetId()

  const [workspaceKey] = widget.useSyncedState('workspaceKey', '')
  const [, fetchBag] = useHillchartBag()
  const [projectId] = widget.useSyncedState('projectId', '')

  const menuItems: Array<WidgetPropertyMenuItem> = []

  if (projectId) {
    menuItems.push({
      itemType: 'action',
      propertyName: 'refresh' as const,
      tooltip: 'Refresh Hillchart',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>'
    })
  }

  if (!workspaceKey) {
    menuItems.push({
      itemType: 'action',
      propertyName: 'authenticate' as const,
      tooltip: 'Login to Linear',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>'
    })
  }
  else {
    menuItems.push({
      itemType: 'action',
      propertyName: 'change' as const,
      tooltip: 'Change Project',
      icon: '<svg width="17" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13C1 13 3.32997 13 4.85692 9.77152C7.1254 4.97518 6.92487 0.946725 8.98569 1.00053C11.0465 1.05434 10.8275 4.22583 13.2504 9.77152C14.661 13 17 13 17 13" stroke="#FFF" stroke-width="2" stroke-linecap="round"/></svg>'    
    })
  }
  
  async function onAction(propertyName: string, widgetId: string): Promise<any> {
    switch (propertyName) {
      case 'refresh': {
        return fetchBag()
      }
      case 'change':
      case 'authenticate': 
        return new Promise((resolve, reject) => {
          showUI(uiDimensions, {
            workspaceKey,
          })
        })
        // const widgetNode = figma.getNodeById(widgetId) as WidgetNode;
        // const node = widgetNode.cloneWidget(
        //   { 
        //     widgetType: 'new-issue'
        //   },
        // )
        // node.x = widgetNode.x + widgetNode.width + 16
        // node.y = widgetNode.y
    }
  }
  
  widget.usePropertyMenu(menuItems, ({ propertyName }) => onAction(propertyName, widgetId))
}