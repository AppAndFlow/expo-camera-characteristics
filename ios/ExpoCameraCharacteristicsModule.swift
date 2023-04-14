import ExpoModulesCore

public class ExpoCameraCharacteristicsModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoCameraCharacteristics")

    Function("getTheme") { () -> String in
      "system"
    }
  }
}